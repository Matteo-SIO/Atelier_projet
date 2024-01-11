import {verifyToken} from "../../utils/SessionUtil";
import Tables from "../../database/Tables.js";
import {FastifyInstance} from "fastify";
import {
    CreateUsageRequest, CreateUsageResponse, GetOneUsageResponse,
    GetUsagesRequest, GetUsagesResponse, UpdateStateUsageResponse,
    UpdateUsageStateRequest,
    UsageRowResponse
} from "../../../@types/requests/usages";

export default function (server: FastifyInstance, BASE_PATH: string) {

    /**
     * @api {GET} /api/usages/ List all the usages
     * @apiPermission manager, employee (only his own usages)
     */
    server.get(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);

        if (!decodedToken) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let reqData = request.query as GetUsagesRequest;

        try {
            let usages = await Tables.Usage.findAll({
                where: {
                    ...(decodedToken.role !== 'manager') ? {id_user: decodedToken.id} : {}
                    // If not manager, only get usages where user_id === decodedToken.id
                },
                offset: Number(reqData.offset ?? 0),
                limit: Number(reqData.limit ?? 20),
                include: { all: true, nested: true }
            });

            let resData: GetUsagesResponse = [];
            for (let usage of usages) {
                resData.push({
                    id: usage.id,
                    id_user: usage.id_user,
                    id_material: usage.id_material,
                    date_start: usage.date_start,
                    date_end: usage.date_end,
                    state: usage.state
                } as UsageRowResponse)
            }

            reply.code(200);
            reply.send(resData as GetUsagesRequest);
        } catch (e) {
            reply.code(500);
            reply.send({error: 'Internal Server Error'});
        }
    });

    /**
     * @api {GET} /api/usages/:id Get a usage by id
     * @apiPermission manager, employee (only his own usages)
     */
    server.get(BASE_PATH + '/:id', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);

        if (!decodedToken) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let isManager = decodedToken.role === 'manager';
        let reqParams = request.params as any;

        try {
            let usage = await Tables.Usage.findOne({
                where: {
                    id: reqParams.id,
                    ...(!isManager) ? {id_user: decodedToken.id} : {}
                }
            });

            if (!usage) {
                reply.code(404);
                reply.send({error: 'Not Found'});
                return;
            }

            reply.code(200);
            reply.send({
                id: usage.id,
                id_user: usage.id_user,
                id_material: usage.id_material,
                date_start: usage.date_start,
                date_end: usage.date_end,
                state: usage.state
            } as GetOneUsageResponse);
        } catch (e) {
            reply.code(500);
            reply.send({error: 'Internal Server Error'});
        }
    });

    /**
     * @api {POST} /api/usages/ Create a usage
     * @apiPermission manager, employee
     * @apiParam {Number} id_material
     * @apiParam {Date} date_start
     * @apiParam {Date} date_end
     * @apiParam {String} [state=open]
     */
    server.post(BASE_PATH + '/', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);

        if (!decodedToken) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        let reqData = request.body as CreateUsageRequest;

        try {
            await Tables.Usage.create({
                id_user: decodedToken.id,
                id_material: reqData.id_material,
                date_start: reqData.date_start,
                date_end: reqData.date_end
            });

            reply.code(201);
            reply.send({
                success: true,
            } as CreateUsageResponse);
        } catch (e: any) {
            reply.code(400);
            reply.send({error: e.message});
        }
    })

    /**
     * @api {PUT} /api/usages/:id/state Update the state of a usage
     * @apiPermission manager, employee (only his own usages)
     * @apiParam {String} state
     */
    server.put(BASE_PATH + '/:id/state', async (request, reply) => {
        let token = request.headers.authorization;
        let decodedToken = verifyToken(token);

        if (!decodedToken) {
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        // only manager can change state
        // otherwise, users can only close their own orders
        let reqParams = request.params as any;
        let reqData = request.body as UpdateUsageStateRequest;
        let isManager = decodedToken.role === 'manager';

        if (decodedToken.role !== 'manager' && reqData.state !== 'CLOSED') {
            // Cannot change state to anything else than CLOSED if not manager
            reply.code(401);
            reply.send({error: 'Unauthorized'});
            return;
        }

        try {
            let res = await Tables.Usage.update({
                state: reqData.state
            }, {
                where: {
                    id: reqParams.id,
                    ...(!isManager) ? {id_user: decodedToken.id} : {}
                }
            });

            if (res[0] === 0) {
                reply.code(404);
                reply.send({error: 'Not Found'});
                return;
            }

            reply.code(200);
            reply.send({
                success: true
            } as UpdateStateUsageResponse);
        } catch (e: any) {
            reply.code(400);
            reply.send({error: e.message});
        }
    });

    // No delete, we keep as logs

}