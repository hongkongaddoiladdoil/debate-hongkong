$(document).ready(function () {
    "use strict";

    class ErrorMessage extends React.Component {
        render() {
            return (
                <div className="alert alert-danger" role="alert">
                    {this.props.message}
                </div>
            )
        }
    }

    class PostQuestionForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = { questionContext: "", error: "" };
            this.updateQuestionContext = this.updateQuestionContext.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }

        updateQuestionContext(e) {
            this.setState({ questionContext: e.target.value })
        }

        onSubmit(e) {
            e.preventDefault();
            var questionContext = e.target.questionContext.value.trim();

            if (!questionContext) {
                return;
            }

            $.ajax({
                url: '/post_question',
                dataType: 'json',
                type: 'POST',
                data: { questionContext: questionContext },
                success: (data) => {
                    if (data.error) {
                        this.setState({ error: data.error });
                    } else {
                        //todo: jump to view question page
                        //var questionId = data.id;
                        //window.location.href = '/view_question/' + questionId;
                    }
                },
                error: (xhr, status, err) => {
                    this.setState({ error: 'An error occured, unable to post question.' })
                }
            });
        }

        render() {
            return (
                <form className="form-question" onSubmit={this.onSubmit}>
                    {this.state.error ? <ErrorMessage message={this.state.error} /> : null}

                    <div className="form-group">
                        <input type="text" name="questionContext" autoFocus className="form-control" onChange={this.updateQuestionContext} placeholder="Write your question.." />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" disabled={!this.state.questionContext}>Post</button>
                </form>
            )
        }
    }

    ReactDOM.render(<PostQuestionForm />, document.getElementById('main'));
});
