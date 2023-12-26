import { Request, Response } from "express";
import ProvinceService from "../services/ProvinceService";

export default new class ProvinceController {
    async create(req: Request, res: Response) {
        try {
            const data = req.body
            const response = await ProvinceService.create(data)
            return res.status(201).json(response)
        } catch (error) {
            return res.status(500).json({ message: "internal server error"})
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data = req.body;
            const response = await ProvinceService.update(id, data);
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error updating province:', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const response = await ProvinceService.delete(id);
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error deleting province:', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const response = await ProvinceService.getAll();
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error getting all provinces:', error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }
};