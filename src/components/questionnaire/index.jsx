import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Flex, Radio, Typography } from "antd";
import {
  calcScore,
  resetScore,
  submitAnswer,
} from "../../redux/slices/questionSlice";
import { useState } from "react";

const { Title } = Typography;

export default function Questionnaire() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questionList);
  const userAnswers = useSelector((state) => state.questionnaire.userAnswers);
  const score = useSelector((state) => state.questionnaire.score);

  const [submitted, setSubmitted] = useState(false);

  function handleAnswerChange(questionId, answerId) {
    dispatch(submitAnswer({ questionId, answerId }));
  }
  function handleSubmit() {
    dispatch(calcScore());
    setSubmitted(true);
  }
  function handleReset() {
    dispatch(resetScore());
    setSubmitted(false);
  }

  return (
    <>
      {questions.map((q) => (
        <Card
          size="small"
          key={q.id}
          title={q.question}
          style={{ marginBottom: "10px" }}
        >
          <Radio.Group
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            onChange={(e) => handleAnswerChange(q.id, e.target.value)}
            value={userAnswers[q.id] || null}
          >
            {q.options.map((option) => (
              <Radio key={option.id} value={option.id}>
                {option.text}
              </Radio>
            ))}
          </Radio.Group>
        </Card>
      ))}
      <Title level={1}>Score: {score}</Title>
      <Flex gap={16}>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button onClick={handleReset}>Reset</Button>
      </Flex>
    </>
  );
}
