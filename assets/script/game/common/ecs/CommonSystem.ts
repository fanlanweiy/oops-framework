/*
 * @Author: dgflash
 * @Date: 2021-07-03 16:13:17
 * @LastEditors: dgflash
 * @LastEditTime: 2022-05-09 09:45:47
 */
import { ecs } from "../../../core/libs/ecs/ECS";
import { EcsAccountSystem } from "../../account/Account";
import { EcsRoleSystem } from "../../role/Role";
import { EcsPositionSystem } from "./position/EcsPositionSystem";

/** 多模块系统组件注册 */
export class CommonSystem extends ecs.System {
    constructor() {
        super();

        this.add(new EcsPositionSystem());
        this.add(new EcsAccountSystem());
        this.add(new EcsRoleSystem());
    }
}
