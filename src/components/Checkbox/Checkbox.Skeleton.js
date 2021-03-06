import React from 'react';

export default class CheckboxSkeleton extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <div className="wfp--form-item wfp--checkbox-wrapper">
        {
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label className="wfp--checkbox-label wfp--skeleton" htmlFor={id} />
        }
      </div>
    );
  }
}
