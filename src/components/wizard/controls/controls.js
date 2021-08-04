/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'; // eslint-disable-line

// import TagButton from './tag-button'

const Controls = ({ passingTags, allFilterClickListener }) => {
  // const { performanceType } = passingTags;

  const buildTagControls = (title, tagGroup) => {
    return (
      <div className="row tagRow">
        <p>{title}</p>
        {Object.keys(passingTags[tagGroup]).map((key) => {
          const tag = passingTags[tagGroup][key];
          return (
            <button
              key={tag.title}
              data-name={key}
              onClick={(e) => allFilterClickListener(e, tagGroup)}
              className={tag.isActive ? 'active' : ''}
            >
              {tag.title}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div sx={controlsStyles}>
      {buildTagControls('Performance Type', 'performanceType')}
      {buildTagControls('# of Participants', 'noOfParticipants')}
      {buildTagControls('Age Range', 'ageRange')}
      {/* {buildTagControls('Themes', 'themes')} */}
      {/* {buildTagControls('Holidays', 'hollidays')} */}

      {/* <button
        className='collection interactive'
        data-name='interactive'
        onClick={e => allFilterClickListener(e, 'performanceType')}
      >
        Interactive
      </button> */}
    </div>
  );
};

export default Controls;

const controlsStyles = {
  button: {
    px: 3,
    py: 2,
    border: 'none',
    mr: 2,
    mb: 2,
    '&.active': {
      backgroundColor: 'primary',
    },
  },
};
