import { isEmpty } from 'ramda';
import * as React from 'react';
import {
  StyleRulesCallback,
  withStyles,
  WithStyles
} from 'src/components/core/styles';
import Grid from 'src/components/Grid';
import { Props as TextFieldProps } from 'src/components/TextField';
import * as zxcvbn from 'zxcvbn';
import StrengthIndicator from '../PasswordInput/StrengthIndicator';
import HideShowText from './HideShowText';

type Props = TextFieldProps & {
  value?: string;
  required?: boolean;
  disabledReason?: string;
};

interface State {
  strength: null | 0 | 1 | 2 | 3;
}

type ClassNames = 'container' | 'strengthIndicator';

const styles: StyleRulesCallback = theme => ({
  container: {
    position: 'relative',
    marginBottom: theme.spacing.unit,
    paddingBottom: theme.spacing.unit / 2
  },
  strengthIndicator: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%'
    }
  }
});

type CombinedProps = Props & WithStyles<ClassNames>;

class PasswordInput extends React.Component<CombinedProps, State> {
  state: State = {
    strength: maybeStrength(this.props.value)
  };

  componentWillReceiveProps(nextProps: CombinedProps) {
    const { value } = nextProps;
    this.setState({ strength: maybeStrength(value) });
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.currentTarget.value;

    if (this.props.onChange) {
      this.props.onChange(e);
    }
    this.setState({ strength: maybeStrength(value) });
  };

  render() {
    const { strength } = this.state;
    const { classes, value, required, disabledReason, ...rest } = this.props;

    return (
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <HideShowText
            {...rest}
            tooltipText={disabledReason}
            value={value}
            onChange={this.onChange}
            fullWidth
            required={required}
          />
        </Grid>
        {
          <Grid item xs={12} className={`${classes.strengthIndicator} py0`}>
            <StrengthIndicator strength={strength} />
          </Grid>
        }
      </Grid>
    );
  }
}

const maybeStrength = (value?: string) => {
  if (!value || isEmpty(value)) {
    return null;
  } else {
    const score = zxcvbn(value).score;
    if (score === 4) {
      return 3;
    }
    return score;
  }
};

const styled = withStyles(styles);

export default styled(PasswordInput);
