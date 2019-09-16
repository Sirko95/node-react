export const apiPersonal = (app, db) => {
  app.get( "/personals", (req, res) =>
    db.personal.findAll().then((personals) => res.render('personals', { personals }))
  );
  
  app.get( "/personal/add/:id", (req, res) => {
    const { params: id } = req;
    res.render('personal', { action: `/add/personal/${id}` })
  }
  );
  app.post( "/personal/add/:id", (req, res) => {
    const {
      first_name,
      last_name,
      email,
      salary,
      datetime,
      params: {
        id
      }
    } = req.body;

    db.personal.create({
      personal_firstName: first_name,
      personal_lastName: last_name,
      personal_email: email,
      personal_salary: salary,
      personal_date_started_work: datetime,
      departmentId: id,
    })
    .then(() => res.redirect('/'))
    .catch( err => console.log(err))
  });
}