import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export function createSpecificationController() {
  const specificationsRepository = SpecificationsRepository.getInstance();
  const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository,
  );
  const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase,
  );

  return createSpecificationController;
}
