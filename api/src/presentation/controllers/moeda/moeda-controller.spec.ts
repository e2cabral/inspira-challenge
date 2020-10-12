
import {request, response} from "express";
import MoedaControllerSpy from "../../../data/test/moeda-controller-spy";
import {throwError} from "../../../data/test/test-helper";

let req = request;
let res = response;

describe('Este teste retorna um json', () => {
  test('Retorna um array que não pode ser null', () => {
    const response = MoedaControllerSpy.obter(req, res);
    expect(response).not.toBe(null);
  });
});

describe('Esse teste deve retornar excessão', () => {
  test('Verifica se a mensagem de erro é a esperada', () => {
    const response = jest.spyOn(MoedaControllerSpy, 'obter').mockImplementationOnce(throwError)
    expect(response).toThrow('Mensagem de erro');
  });
});
