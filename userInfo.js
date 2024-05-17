let id = 1;

function createUserProfiles(names, modifiedNames) {
  const userProfiles = [];

  for (let i = 0; i < names.length; i++) {
    const originalName = names[i];
    const modifiedName = modifiedNames[i];

    const userProfile = {
      originalName: originalName,
      modifiedName: modifiedName,
      id: id,
    };

    userProfiles.push(userProfile);

    id = id + 1;
  }

  return userProfiles;
}
