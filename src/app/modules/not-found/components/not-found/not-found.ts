import { Component } from '@angular/core';
import { NotFoundUtils } from '../../../../shared/utils/not-found-utils/not-found.utils';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
})
export class NotFound {
  utils = NotFoundUtils;
}