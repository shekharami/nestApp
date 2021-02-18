export declare class TasksService {
    private tasks;
    createTask(createTaskDto: any): {
        url: any;
        urlHash: string;
        shortUrl: string;
    };
    getUrlByHash(hash: any): String;
}
