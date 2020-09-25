import React, { Component } from "react";
import Experience from "./Experience";
import CommentsList from "./CommentsList";
import * as api from "../utils/api";
import Loader from "./Loader";
import "../styles/style.css";
import ErrorHandler from "./ErrorHandler";

class ExperienceScreen extends Component {
  state = {
    experience: {},
    images: [],
    isLoading: true,
    err: null,
  };
  componentDidMount() {
    const { experience_id } = this.props;
    api.getSingleExperience(experience_id).then((res) => {
      const { experience, images } = res;
      if (experience)
        this.setState({ experience, images, isLoading: false, err: null });
      else
        this.setState({
          isLoading: false,
          err: { msg: "invalid experience id" },
        });
    });
  }

  render() {
    const { loggedInUser } = this.props;
    if (this.state.isLoading) return <Loader />;
    if (this.state.err) return <ErrorHandler msg={this.state.err.msg} />;
    const { experience, images } = this.state;
    const { experience_id } = experience;
    return (
      <div className="experience-comments-container">
        <Experience experience={experience} images={images} />
        <CommentsList
          experience_id={experience_id}
          loggedInUser={loggedInUser}
        />
      </div>
    );
  }
}

export default ExperienceScreen;
