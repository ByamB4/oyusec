import { DemoChallenge } from 'components'
import { Button, Typography } from '@mui/material'

interface Props {
  className?: string
}

const LandingHero: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full p-0 rounded-3xl overflow-hidden ${className}`}>
      <div className="grid lg:grid-cols-2 h-full">
        <div className="flex flex-col justify-center gap-14 p-10">
          <div className="font-museo text-6xl">
            <span className="text-white">Oyu</span>
            <span className="brand-text">Security</span>
          </div>
          <div>
            <Typography variant="h4" className="font-normal">
              Make it better place to learn, practice, compete in security field in 🇲🇳
            </Typography>
          </div>
          <div className="flex gap-8">
            <Button variant="contained">Бүртгүүлэх</Button>
            <Button variant="outlined">Санал хүсэлт</Button>
          </div>
        </div>
        <div className="relative lg:block hidden">
          <DemoChallenge className="absolute w-2/3 up-down-object" />
        </div>
      </div>
    </div>
  )
}

export default LandingHero
