export const CREATE_EXPERIENCE = 'CREATE_EXPERIENCE';
export const UPDATE_EXPERIENCE = 'UPDATE_EXPERIENCE';
export const UPDATE_SKILLS = 'UPDATE_SKILLS';
export const UPDATE_INTERESTS = 'UPDATE_INTERESTS';
export const UPDATE_AWARDS = 'UPDATE_AWARDS';
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION';

export const createExperience = experience => ({
    type: CREATE_EXPERIENCE,
    payload: {experience}
});

export const REMOVE_EXPERIENCE = 'REMOVE_EXPERIENCE';

export const updateExperience = (newTitle) => ({
    type: UPDATE_EXPERIENCE,
    payload: newTitle,
  });

export const updateSkills = (newTitle) => ({
    type: UPDATE_SKILLS,
    payload: newTitle,
  });

export const updateInterests = (newTitle) => ({
    type: UPDATE_INTERESTS,
    payload: newTitle,
  });

export const updateAwards = (newTitle) => ({
    type: UPDATE_AWARDS,
    payload: newTitle,
  });

export const updateEducation = (newTitle) => ({
    type: UPDATE_EDUCATION,
    payload: newTitle,
  });

export const removeExperience = experience => ({
    type: REMOVE_EXPERIENCE,
    payload: {experience}
});
