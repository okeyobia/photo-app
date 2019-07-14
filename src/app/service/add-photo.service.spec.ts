import { TestBed } from '@angular/core/testing';

import { AddPhotoService } from './add-photo.service';

describe('AddPhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPhotoService = TestBed.get(AddPhotoService);
    expect(service).toBeTruthy();
  });
});
