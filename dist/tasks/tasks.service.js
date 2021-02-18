"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const short = require("short-uuid");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    createTask(createTaskDto) {
        const { url } = createTaskDto;
        const urlHash = short.generate();
        const shortUrl = short.generate();
        this.tasks.push({ url, urlHash, shortUrl });
        return { url, urlHash, shortUrl };
    }
    getUrlByHash(hash) {
        const result = this.tasks.filter(urlObj => urlObj.urlHash === hash);
        const url = result[0].url;
        return url;
    }
};
TasksService = __decorate([
    common_1.Injectable()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map