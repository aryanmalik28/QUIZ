

document.addEventListener('DOMContentLoaded', () => {
  let questionIndex = 1; 

  function addQuestion() {
    const questionsContainer = document.getElementById('questionsContainer');

    const newQuestionHTML = `
      <div class="question-item mb-6" data-question-index="${questionIndex}">
        <label class="block text-lg font-medium text-gray-700">Question ${questionIndex + 1}</label>

        <div>
          <label for="questionType${questionIndex}" class="block mt-2 text-md font-medium text-gray-700">Question Type</label>
          <select id="questionType${questionIndex}" name="questionType${questionIndex}" required
                  class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option value="multiple-choice">Multiple Choice</option>
            <option value="explain">Explain</option>
            <option value="true-false">True/False</option>
          </select>
        </div>

        <textarea name="question${questionIndex}" required
                  class="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter the question"></textarea>

        <div class="mt-4 hidden" id="optionsContainer${questionIndex}">
          <label class="block text-md font-medium text-gray-700">Answer Options</label>
          <div class="space-y-2 mt-2">
            <input type="text" name="option${questionIndex}-1" required
                   class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                   placeholder="Option A">
            <input type="text" name="option${questionIndex}-2" required
                   class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                   placeholder="Option B">
            <input type="text" name="option${questionIndex}-3"
                   class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                   placeholder="Option C">
            <input type="text" name="option${questionIndex}-4"
                   class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                   placeholder="Option D">
          </div>

          <label for="correctAnswer${questionIndex}" class="block mt-4 text-md font-medium text-gray-700">Correct Answer</label>
          <select name="correctAnswer${questionIndex}" required
                  class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option value="option${questionIndex}-1">Option A</option>
            <option value="option${questionIndex}-2">Option B</option>
            <option value="option${questionIndex}-3">Option C</option>
            <option value="option${questionIndex}-4">Option D</option>
          </select>
        </div>

        <div class="mt-4 hidden" id="explainContainer${questionIndex}">
          <label for="explainAnswer${questionIndex}" class="block text-md font-medium text-gray-700">Answer</label>
          <textarea id="explainAnswer${questionIndex}" name="explainAnswer${questionIndex}"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Provide a model answer"></textarea>
        </div>

        <div class="mt-4 hidden" id="trueFalseContainer${questionIndex}">
          <label for="trueFalseAnswer${questionIndex}" class="block text-md font-medium text-gray-700">Answer</label>
          <select id="trueFalseAnswer${questionIndex}" name="trueFalseAnswer${questionIndex}" required
                  class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>
    `;

    questionsContainer.insertAdjacentHTML('beforeend', newQuestionHTML);

    const questionTypeSelector = document.getElementById(`questionType${questionIndex}`);
    questionTypeSelector.addEventListener('change', (event) => {
      handleQuestionTypeChange(event.target);
    });

    questionIndex++; 
  }

  function handleQuestionTypeChange(selector) {
    const questionIndex = selector.parentElement.parentElement.dataset.questionIndex;
    const selectedType = selector.value;

    document.getElementById(`optionsContainer${questionIndex}`).classList.add('hidden');
    document.getElementById(`explainContainer${questionIndex}`).classList.add('hidden');
    document.getElementById(`trueFalseContainer${questionIndex}`).classList.add('hidden');

    if (selectedType === 'multiple-choice') {
      document.getElementById(`optionsContainer${questionIndex}`).classList.remove('hidden');
    } else if (selectedType === 'explain') {
      document.getElementById(`explainContainer${questionIndex}`).classList.remove('hidden');
    } else if (selectedType === 'true-false') {
      document.getElementById(`trueFalseContainer${questionIndex}`).classList.remove('hidden');
    }
  }

  document.getElementById('addQuestionBtn').addEventListener('click', addQuestion);

  const initialQuestionTypeSelector = document.getElementById('questionType0');
  if (initialQuestionTypeSelector) {
    initialQuestionTypeSelector.addEventListener('change', (event) => {
      handleQuestionTypeChange(event.target);
    });
    handleQuestionTypeChange(initialQuestionTypeSelector); // Ensure the correct UI is shown on load
  }
});

  