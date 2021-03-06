import {
  StyleRulesCallback,
  withStyles,
  WithStyles
} from 'src/components/core/styles';

type ClassNames = 'root' | 'title' | 'summarySection' | 'section';

export type StyleProps = WithStyles<ClassNames>;

const styles: StyleRulesCallback<ClassNames> = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing.unit,
      paddingTop: theme.spacing.unit
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing.unit,
      paddingRight: 0
    }
  },
  title: {
    marginBottom: theme.spacing.unit * 2
  },
  summarySection: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3
  },
  section: {
    marginBottom: theme.spacing.unit,
    ...theme.typography.body1,
    '& .dif': {
      position: 'relative',
      width: 'auto',
      '& .chip': {
        position: 'absolute',
        top: '-4px',
        right: -10
      }
    }
  },
  main: {},
  sidebar: {},
  domainSidebar: {},
  titleWrapper: {}
});

export default withStyles(styles);
