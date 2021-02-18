import { Request, Response } from 'express';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getUrl(request: Request, response: Response): void;
    createTask(createTaskDto: CreateTaskDto, request: Request): {
        url: any;
        urlHash: string;
        shortUrl: string;
    };
}
