import { useQuery } from "@tanstack/react-query";
import fetchRoomId from "../../api/fetchRoomId";
import queryClient from "@/shared/api/queryClient";

export default function useRoomIdQuery() {
	const { data, isPending, isError, error } = useQuery(
		{
			queryKey: ["room-id"],
			queryFn: fetchRoomId,
		},
		queryClient
	);

	return {
		roomId: data?.roomId,
		isPending,
		isError,
		error,
	};
}
