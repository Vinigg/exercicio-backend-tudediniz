const AtividadeService = require('../src/services/AtividadeService');
const db = require('../src/db');
const AtividadeNaoEcontradaError = require('../src/errors/AtividadeNaoEncontradaError');

// Mock do serviço de banco de dados
jest.mock('../src/db', () => ({
  ...jest.fn(),
  returning: jest.fn().mockReturnThis(),
  insert: jest.fn().mockReturnThis(),
  update: jest.fn().mockReturnThis(),
  delete: jest.fn()
}));

describe('AtividadeService', () => {
  let service;
  beforeEach(() => {
    service = new AtividadeService(db);
  });
  
  describe('atividade', () => {
    it('deve retornar a atividade procurada', async () => {
      const mockAtividade = { id: 1, nome: 'Teste' };
      //db.where.mockResolvedValueOnce({ first: () => mockAtividade });
      db.where.mockResolvedValueOnce([mockAtividade])

      const result = await service.atividade(1);
      expect(result).toEqual(mockAtividade);
      expect(db.where).toHaveBeenCalledWith({ id: 1 });
    });

    it('deve lançar AtividadeNaoEcontradaError se a atividade não for encontrada', async () => {
      db.where.mockResolvedValueOnce({ first: () => null });

      await expect(service.atividade(1)).rejects.toThrow(AtividadeNaoEcontradaError);
    });
  });

  describe('atividades', () => {
    it('deve retornar todas as atividades', async () => {
      const mockAtividades = [{ id: 1, nome: 'Teste' }];
      db.mockResolvedValueOnce(mockAtividades);

      const result = await service.atividades();
      expect(result).toEqual(mockAtividades);
    });
  });

  describe('criarAtividade', () => {
    it('deve criar uma nova atividade e retornar a atividade criada', async () => {
      const mockAtividade = { id: 1, nome: 'Teste' };
      db.insert.mockResolvedValueOnce([mockAtividade]);

      const result = await service.criarAtividade(mockAtividade);
      expect(result).toEqual(mockAtividade);
      expect(db.insert).toHaveBeenCalledWith(mockAtividade);
    });
  });

  describe('atualizarAtividade', () => {
    it('deve atualizar a atividade e retornar a atividade atualizada', async () => {
      const mockAtividade = { id: 1, nome: 'Atualizado' };
      //db.where.mockResolvedValueOnce({ update: () => [mockAtividade] });
      db.where.mockResolvedValueOnce([mockAtividade]);

      const result = await service.atualizarAtividade(1, mockAtividade);
      expect(result).toEqual(mockAtividade);
      expect(db.where).toHaveBeenCalledWith({ id: 1 });
      expect(db.update).toHaveBeenCalledWith(mockAtividade);
    });

    it('deve lançar AtividadeNaoEcontradaError se a atividade não for encontrada', async () => {
      db.where.mockResolvedValueOnce({ update: () => [null] });

      await expect(service.atualizarAtividade(1, { nome: 'Atualizado' })).rejects.toThrow(AtividadeNaoEcontradaError);
    });
  });

  describe('deletarAtividade', () => {
    it('deve deletar a atividade pelo id', async () => {
      db.delete.mockResolvedValueOnce(1); // Sucesso na deleção

      const result = await service.deletarAtividade({ id: 1 });
      expect(result).toBe(1);
      expect(db.delete).toHaveBeenCalledWith({ id: 1 });
    });

    it('deve lançar AtividadeNaoEcontradaError se o id não for fornecido', async () => {
      await expect(service.deletarAtividade({})).rejects.toThrow(AtividadeNaoEcontradaError);
    });
  });
});