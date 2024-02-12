import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import {es} from 'date-fns/locale'
@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    return formatDistanceToNow(date,{locale:es});
  }

}
