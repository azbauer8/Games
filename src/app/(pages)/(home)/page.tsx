import { siteConfig } from "@/config"
import { Button, Link } from "@nextui-org/react"

import {
  LandingActions,
  LandingDescription,
  LandingTitle,
  MotionLandingHeader,
} from "@/components/LandingHeader"

export default function Home() {
  return (
    <div>
      <MotionLandingHeader>
        <LandingTitle>A starter kit for Next.js with NextUI</LandingTitle>
        <LandingDescription>
          Get a well-structured and beautifully designed site up and running in
          minutes.
        </LandingDescription>
        <LandingActions>
          <Button
            href={siteConfig.links.components}
            as={Link}
            showAnchorIcon
            variant="flat"
            isExternal
          >
            Custom Components
          </Button>
          <Button
            href={siteConfig.links.github}
            as={Link}
            color="primary"
            showAnchorIcon
            variant="flat"
            isExternal
          >
            Source Code
          </Button>
        </LandingActions>
      </MotionLandingHeader>
    </div>
  )
}
