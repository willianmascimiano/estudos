import 'Gato.dart';
import 'Cachorro.dart';
import 'Passaro.dart';

void main() {
  var arrayAnimal = [
    ['Cachorro', 'Cindy'],
    ['Cachorro', 'Tiger'],
    ['Gato', 'Nina'],
    ['Passaro', 'Luna']
  ];

  for (int i = 0; i <= arrayAnimal.length - 1; i++) {
    switch (arrayAnimal[i][0]) {
      case "Gato":
        print(new Gato(arrayAnimal[i][1]));
        break;
      case "Cachorro":
        print(new Cachorro(arrayAnimal[i][1]));
        break;
      case "Passaro":
        print(new Passaro(arrayAnimal[i][1]));
        break;
    }
  }
}
