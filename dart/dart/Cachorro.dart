import 'Animal.dart';

class Cachorro extends Animal {
  Cachorro(String nome) {
    super.nome = nome;
    super.locomocao = "4 patas";
    this.tipo = "Cachorro";
  }

  latir() {
    print('O Cachorro late.');
  }
}
