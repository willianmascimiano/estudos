import 'Animal.dart';

class Gato extends Animal {
  Gato(String nome) {
    super.nome = nome;
    super.locomocao = '4 Patas';
  }

  @override
  toString() {
    return "O gato se chama $nome e se locomove por $locomocao";
  }
}
