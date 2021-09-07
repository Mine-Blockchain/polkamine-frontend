
import { memo } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import LINKS from 'utils/constants/links'
import { 
  LOGO_IMAGE_PATH, 
  LOGO_LABEL_IMAGE_PATH 
} from 'utils/constants/image-paths'

const useStyles = makeStyles(() => ({
  picture: {
    display: 'flex',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'unset'
  },
  img: {
    height: 47,
    objectFit: 'contain',
  },
}));

const Logo = ({
  isLabel = true,
  className,
  ...rest
}) => {
  const classes = useStyles()
  const imagePath = isLabel ? LOGO_LABEL_IMAGE_PATH : LOGO_IMAGE_PATH

  return (
    <Link href={LINKS.HOME.HREF}>
      <a className={clsx(classes.container, className)}>
        <picture className={classes.picture} {...rest}>
          <source srcSet={imagePath} />
          <img
            className={classes.img}
            src={imagePath}
            alt='logo'
          />
        </picture>
      </a>
    </Link>
  )
}

export default memo(Logo);
