const personHealthIndicator = {
    healthy: {
        health: 50,
        indicateColor: 'green'
    },
    wounded: {
        health: 15,
        indicateColor: 'yellow'
    },
    critical: {
        health: 1,
        indicateColor: 'red'
    }
};

export default function healthIndicate(personHealth) {
    if (personHealth.health) {
        if (personHealth.health > personHealthIndicator.healthy.health) {
            return 'healthy';
        }
        if (personHealth.health >= personHealthIndicator.wounded.health) {
            return 'wounded';
        }
        if (personHealth.health >= personHealthIndicator.critical.health) {
            return 'critical';
        }
    }
    return 'dead';
};
