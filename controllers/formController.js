import * as formModel from '../models/formModel.js';

export const getAllResponses = async (req, res) => {
    try {
        const responses = await formModel.getAllResponses();
        res.status(200).json(responses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addResponse = async (req, res) => {
    try {
        const response = req.body;
        const result = await formModel.addResponse(response);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}