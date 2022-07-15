import React from "react";
import type { GetServerSideProps } from "next";
import { db } from "../../prisma/db";

export const getServerSideProps: GetServerSideProps = async () => {
    const users = await db.user.findMany();

    return {
        props: { users },
    };
};

function Home({ users }: any) {

    return (
        <div>
            <h2 className="text-xl">All User</h2>
            <div className="my-8">
                {users.map((user) => {
                    return (
                        <div key={user.id} className="p-4 m-4 border rounded-t-md">
                            <p>name: {user.username}</p>
                            <p>email: {user.email}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
