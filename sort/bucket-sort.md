# Bucket-sort（バケットソート）

ビーンソートとも言われる。予めデータが取りうる値すべての容器（バケット）を順番通りに並べて用意しておき、値を対応する容器に移す事でソートを行う。

比較を用いないのが特徴。

利用する為にはいくつかの前提条件がある。

- データの最大値が予め分かっている事
- ソート対象のデータに重複データが存在しない事

また予めデータ個数分のバケットを用意するのでメモリを多く利用するので、データ範囲が大きい場合も利用は厳しいだろう。

## アルゴリズムの概要

前提としてソート対象のデータは 1 から 10 の整数とする。

1. 1 から 10 に対応する10個のバケットを順に並べて用意する
1. データを対応するバケットに入れる
1. バケットから順にデータを取り出す

ソート対象のデータが10個未満の場合でも、バケットは10個用意する必要がある。
