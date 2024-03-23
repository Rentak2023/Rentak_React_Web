import { useParams } from "react-router";
import { useReduxDispatch, useReduxSelector } from "../../../redux";
import { post } from "../../../redux/results";
import { Model, StylesManager } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import { useEffect } from "react";
import { load } from "apps/front-office/redux/surveys";

StylesManager.applyTheme("defaultV2");

const SurveyPage = () => {
  const { id } = useParams();
  const dispatch = useReduxDispatch();
  const surveys = useReduxSelector(state => state.surveys.surveys);
  console.log(surveys)
  const survey = surveys.filter(s => s.id === id)[0];
  const model = new Model(survey?.json);

  model.onComplete.add((sender: Model) => {
    dispatch(
      post({
        postId: id as string,
        surveyResult: sender.data,
        surveyResultText: JSON.stringify(sender.data),
      }),
    );
  });

  useEffect(() => {
    dispatch(load())
  }, [dispatch]) 

  return (
    <>
      <h1>{survey?.name}</h1>
      <Survey model={model} />
    </>
  );
};

export default SurveyPage;
