import { toast, ToastContainerProps } from 'react-toastify'
import { Typography } from '@mui/material'
import { handleIcon } from 'utils'

const SuccessToast = ({ message, el }) => {
  return (
    <div
      className="relative flex mt-10 flex-col gap-2 py-5 px-8 rounded-[30px] min-w-[300px]"
      style={{
        background: 'linear-gradient(104.44deg, #5634B8 8.47%, #8167CA 95.11%)',
      }}
    >
      <div className="absolute -mt-14 rounded-full p-4 border bg-glass-fill backdrop-blur-xl">
        {handleIcon({
          icon: 'hi-check',
          className: 'text-primary-purple',
          size: 26,
        })}
      </div>
      <div className="flex flex-col text-white">
        <Typography variant="h6" className="font-bold">
          Амжилттай
        </Typography>
        <Typography variant="subtitle1" className="break-words">
          {message}
        </Typography>
        {el && el}
      </div>
    </div>
  )
}

export const ErrorToast = ({ message, el }) => {
  return (
    <div
      className="relative flex mt-10 flex-col gap-2 py-5 px-8 rounded-[30px] min-w-[300px]"
      style={{
        background: 'linear-gradient(115.12deg, #FF4259 8.51%, #FF237F 95.8%)',
      }}
    >
      <div className="absolute -mt-14 rounded-full p-4 border bg-glass-fill backdrop-blur-xl">
        {handleIcon({
          icon: 'close',
          className: 'text-primary-purple',
          size: 26,
        })}
      </div>
      <div className="flex flex-col">
        <Typography variant="h6" className="text-white font-bold">
          Амжилтгүй
        </Typography>
        <Typography variant="subtitle1" className="text-white break-words">
          {message}
        </Typography>
        {el && el}
      </div>
    </div>
  )
}

interface Props extends ToastContainerProps {
  message: string
  type: any
  el?: React.ReactNode
}

const ToastMessage: React.FC<Props> = ({ type, message, el }): React.ReactElement => {
  return toast[type](
    <>{type === 'success' ? <SuccessToast message={message} el={el} /> : <ErrorToast message={message} el={el} />}</>,
  )
}

export default ToastMessage
