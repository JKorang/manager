import {
  StyleRulesCallback,
  withStyles,
  WithStyles
} from 'src/components/core/styles';

type ClassNames =
  | 'root'
  | 'navIconHide'
  | 'close'
  | 'textfieldContainer'
  | 'textfield'
  | 'input'
  | 'icon';

export type StyleProps = WithStyles<ClassNames>;

const styles: StyleRulesCallback<ClassNames> = theme => ({
  root: {
    position: 'relative' /* for search results */,
    height: 50,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.bg.main,
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    transition: theme.transitions.create(['opacity']),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.bg.white,
      position: 'absolute',
      width: 'calc(100% - 118px)',
      zIndex: -1,
      left: 0,
      visibility: 'hidden',
      opacity: 0,
      margin: 0,
      '&.active': {
        visibility: 'visible',
        opacity: 1,
        zIndex: 3
      }
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
    '& .react-select__menu-list': {
      padding: 0,
      overflowX: 'hidden'
    },
    '& .react-select__control': {
      backgroundColor: 'transparent'
    },
    '& .react-select__value-container': {
      overflow: 'hidden',
      '& p': {
        fontSize: '1rem'
      }
    },
    '& .react-select__indicators': {
      display: 'none'
    },
    '& .react-select__menu': {
      marginTop: 12,
      boxShadow: `0 0 5px ${theme.color.boxShadow}`,
      maxHeight: 325,
      overflowY: 'auto',
      border: 0
    }
  },
  navIconHide: {
    '& > span': {
      justifyContent: 'flex-end'
    },
    '& svg': {
      width: 32,
      height: 32
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  close: {
    '& > span': {
      padding: 2
    },
    '&:hover, &:focus': {
      color: theme.palette.primary.main
    }
  },
  icon: {
    color: '#c9cacb',
    fontSize: '2rem'
  },
  textfieldContainer: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {}
  },
  textfield: {
    margin: 0,
    flex: 1,
    minHeight: 'initial',
    '& input:focus': {
      outline: '1px dotted #606469'
    }
  },
  input: {
    maxWidth: '100%',
    border: 0,
    background: 'transparent',
    '& input': {
      transition: theme.transitions.create(['opacity']),
      fontSize: '1.0em',
      [theme.breakpoints.down('sm')]: {}
    }
  }
});

export default withStyles(styles);
