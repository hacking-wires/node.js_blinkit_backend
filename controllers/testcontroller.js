const testUserController = (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: "test user data api"
        });
    } catch (error) {
        console.error('error in test-user api', error);
        res.status(500).send({
            success: false,
            message: "internal server error"
        });
    }
};

module.exports = { testUserController };
