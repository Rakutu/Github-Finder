import { FaRegTimesCircle } from 'react-icons/fa';

interface AlertMessagePropType {
    message: string
}

function AlertMessage({ message }: AlertMessagePropType) {
  return (
    <p className='flex items-start mb-4 space-x-2'>
        <FaRegTimesCircle style={{width: '25px', height: '25px', paddingTop: '3px', color: 'red'}} />
        <p className="flex-1 text-base font-semibold leading-7 text-white">
            <strong>{message}</strong>
        </p>
    </p>
  )
}

export default AlertMessage