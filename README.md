## Node Bot Router

A simple node JS bot using middleware to ensure that the endpoint only responds correctly to A payload from Hangouts Chat.

**Implementation**

This instance was run on heroku, the Environment Variable GSUITE_TOKEN was provided via the GUI. You can also host on App Engine while providing the GSUITE_TOKEN env variable in the app.yaml.

However, due to the lack of standard env on GCP for nodejs, heroku was used to prevent incurring costs. Currently, only flex environment is allowed. Issue Tracking [here](https://issuetracker.google.com/issues/67711509)
