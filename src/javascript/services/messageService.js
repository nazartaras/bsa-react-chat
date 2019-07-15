import { callApi } from '../helpers/apiHelper';

class MessageService {
    async getMessages() {
        try {
            const apiResult = await callApi('GET');
            return apiResult;
        } catch (error) {
            throw error;
        }
    }
}
export const messageService = new MessageService();