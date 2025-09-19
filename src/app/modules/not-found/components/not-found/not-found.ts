import { Component } from '@angular/core';
import { NotFoundUtils } from '../../../../shared/utils/not-found-utils/not-found.utils';

@Component({
  selector: 'not-found',
  imports: [],
  templateUrl: './not-found.html',
})
export class NotFound {
  utils = NotFoundUtils;
}