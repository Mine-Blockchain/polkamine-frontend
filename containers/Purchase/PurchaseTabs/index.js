
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import RightArrowIcon from 'components/Icons/RightArrowIcon'
import PurchaseTokenItem from 'containers/Purchase/Shared/PurchaseTokenItem'
import { PURCHASE_TABS_ARRAY } from 'utils/constants/purchase-tabs'

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1.5, 2),
    borderRadius: theme.spacing(1),
    border: `0.5px solid ${theme.custom.palette.border}`
  }
}));

const PurchaseTabs = ({
  selectedTab,
  setSelectedTab
}) => {
  const classes = useStyles()

  const tabHandler = (tab) => () => {
    setSelectedTab(tab)
  }

  return (PURCHASE_TABS_ARRAY.map((item) => (
    <div
      key={item.value}
      className={classes.tabContainer}
      onClick={tabHandler(item)}
    >
      <PurchaseTokenItem token={item} />
      <RightArrowIcon selected={item.value === selectedTab.value} />
    </div>
  )))
}

export default memo(PurchaseTabs)