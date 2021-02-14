abstract class Animal {
  String nome;
  String locomocao;
  String tipo;

  getLocomocao() {
    return this.locomocao;
  }

  getNome() {
    return this.nome;
  }

  @override
  toString() {
    return "O animal é um $tipo, se chama $nome e se locomove por $locomocao";
  }
}
