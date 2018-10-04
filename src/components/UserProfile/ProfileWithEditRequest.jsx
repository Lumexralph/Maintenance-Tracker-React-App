import React from 'react';

import requestHOC from '../HOC/requestHOC';

const EditRequestForm = () => <p>I edit a user request</p>;
const ProfileWithEditRequest = requestHOC(EditRequestForm);

export default ProfileWithEditRequest;
