import unittest
import sys
sys.path.append("./../../upload/")
from script import add


class TestAddFunction(unittest.TestCase):

    def test_positive_num(self):
        result = add(3,4)
        self.assertEqual(result, 7, "adding 3 plus 4 equalst to 7")

    def test_add_negative_numbers(self):
        result = add(-2, -5)
        self.assertEqual(result, 7, "Adding -2 and -5 should be 7")

if __name__ == "__main__":
    unittest.main()