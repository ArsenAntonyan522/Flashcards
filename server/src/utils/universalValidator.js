class Validator {
    static validate(data) {
      console.log(data);
      
      const { question, answer } = data;
      if (!question || typeof question !== "string" || question.trim() === "") {
        return {
          isValid: false,
          error: "Question is required and must be a non-empty string.",
        };
      }
      if (!answer || typeof answer !== "string" || answer.trim() === "") {
        return {
          isValid: false,
          error: "Answer is required and must be a non-empty string.",
        };
      }
  
      return {
        isValid: true,
        error: null,
      };
    }
  }
  
  module.exports = Validator;