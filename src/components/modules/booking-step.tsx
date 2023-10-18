import UserDetails from './steps/user-details';
import PriceDetails from './steps/price-details';
import Confirmation from './steps/confirmation';
import { stepsInfo } from '@/core/utils/utils';
import { ButtonBlockType } from '@/core/utils/types';
import ButtonBlock from './button-block';

function BookingStep(props: ButtonBlockType) {
  return (
    <>
      <h3>{stepsInfo[props.step].title}</h3>
      <div>
        {props.step == 0 && <PriceDetails />}
        {props.step == 1 && <UserDetails />}
        {props.step == 2 && <Confirmation />}
      </div>

      <ButtonBlock
        {...props}
      />
    </>
  );
}

export default BookingStep;
