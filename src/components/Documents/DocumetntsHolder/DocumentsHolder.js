import React, { Component } from 'react';
import './DocumentHolder.css';
import EntrepreneurTerms from '../TermsOfUse/TermsOfUseEntrepreneur';
import LegalTerms from '../TermsOfUse/TermsOfUseLegal';
import Return from '../TermsOfReturn/TermsOfReturn';
import Feedback from '../FeedbackRequisites/FeedbackRequisites';
import FeedbackStyles from '../FeedbackRequisitesStyles/FeedbackRequisitesStyles';


class DocumentsHolder extends Component {
  docHolderRef = React.createRef();

  componentDidUpdate(prevState) {
    if (!prevState.documentsShown) {
      this.docHolderRef.current.scrollIntoView({block: "start", behavior: "smooth"});
    }
  }

  render() {
    return (
      <div ref={this.docHolderRef} id="documents" className={this.props.documentsShown ? 'Documents' : 'Documents__hidden'}>
        {this.props.active === 'legal' ?
          <LegalTerms requisites={this.props.requisites} /> :
          <EntrepreneurTerms requisites={this.props.requisites} />}
        <Return requisites={this.props.requisites} />
        <Feedback requisites={this.props.requisites} active={this.props.active} />
        <FeedbackStyles />
      </div>
    );
  }
}

export default DocumentsHolder;