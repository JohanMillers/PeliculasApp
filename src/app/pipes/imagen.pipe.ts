import { Pipe, PipeTransform } from '@angular/core';

const Url = 'https://image.tmdb.org/t/p';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagen: string, size: string = 'w500'): string {
    if (!imagen) {
      return;
    }

    const imgUrl = `${Url}/${size}${imagen}`
    console.log(imgUrl);

    return imgUrl;
  }

}
