import ray
import chess.pgn

def parse_pgn(path):
    with open (path, 'r') as f:
        pass


@ray.remote
class ELOCalculator:
    def __init__(self):
        self.ratings = {}

    def calc_rating(self, player, opponent, result):
        pass

    def update_rating(self, player, opponent, new_elo):
        self.ratings[player] = new_elo

def process_game(game, calculator):
    p1, p2, result = game
    res1 = calculator.calc_rating.remote(p1, p2, result)
    res2 = calculator.calc_rating.remote(p2, p1, 1 - result)
    calculator.update_rating.remote(p1, p2, res1)
    calculator.update_rating.remote(p2, p1, res2)


#query interface
@ray.remote
def get_rating(calculator, player):
    return ray.get(calculator.ratings[player])
