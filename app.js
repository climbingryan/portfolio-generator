const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr => {
        // function for displaying input
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);