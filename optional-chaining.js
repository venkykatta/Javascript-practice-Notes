let userAdmin = undefined;
if (payload.access && payload.access.admin && payload.access.admin[0]) {
    userAdmin = payload.access.admin[0].user;
}

const userAdmin = payload.access?.admin[0]?.user;

